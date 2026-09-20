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
		"content": `<style>.aon9yr6rp {
  fill: currentColor;
  d: path("M13 3.5C13 4.88 10.761 6 8 6S3 4.88 3 3.5S5.239 1 8 1s5 1.12 5 2.5m-10 9V5.487C4.057 6.413 5.864 7 8 7s3.943-.587 5-1.513V12.5c0 1.425-2.149 2.5-5 2.5s-5-1.075-5-2.5");
}
</style><path class="aon9yr6rp"/>`,
		"fallback": "fluent:database-16-filled",
	});
}

export default Component;
