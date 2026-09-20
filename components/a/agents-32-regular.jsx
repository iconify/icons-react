import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v5nnjoj6d {
  fill: currentColor;
  d: path("M10.774 5a1 1 0 0 0-.866.5l-5.773 10a1 1 0 0 0 0 1L9.8 26.314a1.37 1.37 0 0 0 2.512-.332L17.76 5.503a3.37 3.37 0 0 1 6.177-.819l5.667 9.815a3 3 0 0 1 0 3l-5.774 10a3 3 0 0 1-2.598 1.5h-4.228a1 1 0 1 1 0-2h4.228a1 1 0 0 0 .866-.5l5.774-10a1 1 0 0 0 0-1l-5.667-9.815a1.37 1.37 0 0 0-2.512.334l-5.446 20.476a3.37 3.37 0 0 1-6.177.82L2.403 17.5a3 3 0 0 1 0-3l5.773-10A3 3 0 0 1 10.774 3h4.229a1 1 0 1 1 0 2z");
}
</style><path class="v5nnjoj6d"/>`,
		"fallback": "fluent:agents-32-regular",
	});
}

export default Component;
