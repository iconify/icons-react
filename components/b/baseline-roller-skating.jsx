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
		"content": `<style>.mje8tib7e {
  fill: currentColor;
  d: path("M9 6.5c0-.28.22-.5.5-.5h2.52L12 5H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H12V1H4v15h16v-2.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H9.5c-.28 0-.5-.22-.5-.5M5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m14 0c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m-7 0c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3");
}
</style><path class="mje8tib7e"/>`,
		"fallback": "ic:baseline-roller-skating",
	});
}

export default Component;
