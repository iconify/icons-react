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
		"content": `<style>.yr79aw6br {
  fill: currentColor;
  d: path("m6.585 17.308l2.396-4.174q-.173.097-.404.135t-.461.039q-1.4 0-2.354-.972q-.954-.971-.954-2.336q0-1.4.954-2.354t2.354-.954q1.364 0 2.336.954t.971 2.347q0 .486-.118.906t-.336.793l-3.238 5.616zm8.769 0l2.396-4.173q-.173.096-.404.134t-.461.039q-1.4 0-2.354-.972q-.954-.971-.954-2.336q0-1.42.954-2.363t2.354-.945q1.364 0 2.336.954t.971 2.347q0 .486-.118.906t-.335.793L16.5 17.308zm-5.686-5.755q.64-.64.64-1.553t-.64-1.553t-1.552-.64q-.914 0-1.553.64q-.64.64-.64 1.553t.64 1.553t1.553.64t1.552-.64m8.77 0q.639-.64.639-1.553t-.64-1.553t-1.553-.64t-1.552.64q-.64.64-.64 1.553t.64 1.553t1.552.64q.914 0 1.553-.64M8.117 10");
}
</style><path class="yr79aw6br"/>`,
		"fallback": "material-symbols-light:format-quote-outline",
	});
}

export default Component;
