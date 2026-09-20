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
		"content": `<style>.gx6a0l4vu {
  fill: currentColor;
  d: path("M8 7V5.384q0-.67.472-1.143q.472-.472 1.144-.472h4.768q.672 0 1.144.472q.472.473.472 1.144V7h3.385q.67 0 1.143.472q.472.472.472 1.144v9.769q0 .67-.472 1.143q-.472.472-1.143.472H4.615q-.67 0-1.143-.472Q3 19.056 3 18.385v-9.77q0-.67.472-1.143Q3.944 7 4.616 7zm1 0h6V5.384q0-.269-.173-.442t-.442-.173h-4.77q-.269 0-.442.173Q9 5.116 9 5.385zm-5 9.577h16v-2.154H4z");
}
</style><path class="gx6a0l4vu"/>`,
		"fallback": "material-symbols-light:card-travel-rounded",
	});
}

export default Component;
