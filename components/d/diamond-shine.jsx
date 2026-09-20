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
		"content": `<style>.k4hfomlih {
  fill: currentColor;
  d: path("M5.46 7.25L3.489 5.298l.713-.707l1.971 1.951zm6.06-1.48V3h1v2.77zm7.009 1.48l-.695-.713l1.952-1.952l.714.713zM12.019 21l-7.594-7.462h15.17zM8.385 7.77h7.25l3.946 4.769H4.439z");
}
</style><path class="k4hfomlih"/>`,
		"fallback": "material-symbols-light:diamond-shine",
	});
}

export default Component;
