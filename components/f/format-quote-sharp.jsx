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
		"content": `<style>.ge8ysvbph {
  fill: currentColor;
  d: path("m6.585 17.308l2.396-4.174q-.173.097-.404.135t-.461.039q-1.4 0-2.354-.973q-.954-.974-.954-2.335q0-1.4.954-2.354t2.354-.954q1.361 0 2.334.954T11.423 10q0 .479-.118.899t-.336.793l-3.238 5.616zm8.769 0l2.396-4.173q-.173.096-.404.134t-.461.039q-1.4 0-2.354-.973T13.577 10q0-1.42.954-2.363t2.354-.945q1.361 0 2.334.954T20.192 10q0 .479-.118.899t-.335.793L16.5 17.308z");
}
</style><path class="ge8ysvbph"/>`,
		"fallback": "material-symbols-light:format-quote-sharp",
	});
}

export default Component;
