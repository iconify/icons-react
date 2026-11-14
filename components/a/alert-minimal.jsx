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
		"content": `<style>.kb-d9ccwy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.75 4.5q0-2.75-2.75-2.75T9.25 4.5v9q0 2.75 2.75 2.75t2.75-2.75zM9.5 20q0-2.5 2.5-2.5q1.036 0 1.768.732T14.5 20t-.732 1.768T12 22.5q-2.5 0-2.5-2.5");
}
</style><path class="kb-d9ccwy"/>`,
		"fallback": "uix-solid:alert-minimal",
	});
}

export default Component;
