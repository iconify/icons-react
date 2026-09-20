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
		"content": `<style>.laggt4bjl {
  fill: currentColor;
  d: path("M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3zm-.002 1.5H5a1.5 1.5 0 0 0-1.493 1.356L3.5 9v6a1.5 1.5 0 0 0 1.355 1.493L5 16.5h11.998a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493zM6.017 9H9a1 1 0 0 1 .993.883L10 10v4a1 1 0 0 1-.883.993L9 15H6.017a1 1 0 0 1-.994-.883L5.017 14v-4a1 1 0 0 1 .883-.993zH9z");
}
</style><path class="laggt4bjl"/>`,
		"fallback": "fluent:battery-3-24-regular",
	});
}

export default Component;
