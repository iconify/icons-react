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
		"content": `<style>.os_yprb0y {
  fill: currentColor;
  d: path("M11 17h2l1.95-7.75q.05-.125.05-.225V8.8q0-.725-.513-1.263T13.25 7H9v2h4zm1 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22");
}
</style><path class="os_yprb0y"/>`,
		"fallback": "material-symbols:counter-7",
	});
}

export default Component;
