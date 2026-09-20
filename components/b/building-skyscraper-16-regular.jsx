import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ms_8i38yk {
  fill: currentColor;
  d: path("M6 7.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M6 9.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-.5-1.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-6-9a.5.5 0 0 0-.5.5V3h-.5a.5.5 0 0 0-.5.5v1.65A1.7 1.7 0 0 0 3 6.7v6.8a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-3.3a3.7 3.7 0 0 0-3.7-3.7h-.312A1.7 1.7 0 0 0 9 5.15V3.5a.5.5 0 0 0-.5-.5H8V1.5a.5.5 0 0 0-.5-.5zM8 5H5V4h3zm1 1.7V13H8v-1.1a.9.9 0 0 0-.9-.9H5.9a.9.9 0 0 0-.9.9V13H4V6.7a.7.7 0 0 1 .7-.7h3.6a.7.7 0 0 1 .7.7M6 13v-1h1v1zm4 0V7.5h.3a2.7 2.7 0 0 1 2.7 2.7V13zM7 3H6V2h1z");
}
</style><path class="ms_8i38yk"/>`,
		"fallback": "fluent:building-skyscraper-16-regular",
	});
}

export default Component;
