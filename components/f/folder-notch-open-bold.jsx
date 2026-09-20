import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ahh7c88wr {
  fill: currentColor;
  d: path("M248.23 112.31A20 20 0 0 0 232 104h-12V88a20 20 0 0 0-20-20h-68l-26.66-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v144a12 12 0 0 0 12 12h179.1a12 12 0 0 0 11.33-8l28.49-81.47l.06-.17a20 20 0 0 0-2.75-18.05M92 68l26.67 20a20.12 20.12 0 0 0 12 4H196v12h-49.57a20 20 0 0 0-11.1 3.36l-19 12.64H69.42a19.91 19.91 0 0 0-18.52 12.44L44 148.77V68Zm110.59 128H50.1l22-52h45.51a20 20 0 0 0 11.1-3.36l19-12.64h78.73Z");
}
</style><path class="ahh7c88wr"/>`,
		"fallback": "ph:folder-notch-open-bold",
	});
}

export default Component;
