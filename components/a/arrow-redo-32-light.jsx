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
		"content": `<style>.jd4r3r-7k {
  fill: currentColor;
  d: path("M25.995 3.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h10.793l-9.07-9.07a6.571 6.571 0 1 0-9.293 9.292l12.924 12.925a.5.5 0 0 1-.707.707L6.218 15.93A7.571 7.571 0 0 1 16.925 5.222l9.07 9.07z");
}
</style><path class="jd4r3r-7k"/>`,
		"fallback": "fluent:arrow-redo-32-light",
	});
}

export default Component;
