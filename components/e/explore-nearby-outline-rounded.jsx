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
		"content": `<style>.qzcvce3mf {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788M12 17.5q1.125-1.125 2-2.325q.75-1.025 1.375-2.25T16 10.5q0-1.65-1.175-2.825T12 6.5T9.175 7.675T8 10.5q0 1.2.625 2.425T10 15.175q.875 1.2 2 2.325m-1.062-5.937q-.438-.438-.438-1.063t.438-1.062T12 9t1.063.438t.437 1.062t-.437 1.063T12 12t-1.062-.437");
}
</style><path class="qzcvce3mf"/>`,
		"fallback": "material-symbols:explore-nearby-outline-rounded",
	});
}

export default Component;
