import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ashbwfp1i {
  fill: currentColor;
  d: path("M8.885 14.5q-2.289 0-3.894-1.606Q3.385 11.288 3.385 9q0-.327.046-.663t.13-.652q.068-.212.207-.308q.14-.096.326-.146t.367.003t.322.195l2.702 2.663L9.977 7.6L7.333 4.937q-.142-.143-.195-.332t-.003-.376t.156-.326q.105-.14.298-.207q.315-.104.642-.15t.654-.046q2.288 0 3.894 1.606T14.385 9q0 .69-.139 1.27q-.138.58-.415 1.1l5.819 5.807q.533.533.533 1.294q0 .762-.533 1.295t-1.294.532t-1.295-.538l-5.807-5.814q-.558.258-1.138.406t-1.231.148");
}
</style><path class="ashbwfp1i"/>`,
		"fallback": "material-symbols-light:build-rounded",
	});
}

export default Component;
