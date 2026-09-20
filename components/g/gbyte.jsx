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
		"content": `<style>.d1f9ifbha {
  fill: var(--svg-color--fff, #fff);
  d: path("M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9");
}
</style><path class="d1f9ifbha"/>`,
		"fallback": "token-branded:gbyte",
	});
}

export default Component;
