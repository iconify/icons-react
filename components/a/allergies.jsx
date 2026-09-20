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
		"content": `<style>.glyx5wfmz {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-4.9-8.55l1.8-.9l-2-4l-1.8.9zM9.5 18h2v-7.225L9.4 6.55l-1.8.9l1.9 3.8zm3 0h2v-6.775l1.9-3.775l-1.8-.9l-2.1 4.2zm4.4-4.55l2-4l-1.8-.9l-2 4z");
}
</style><path class="glyx5wfmz"/>`,
		"fallback": "material-symbols:allergies",
	});
}

export default Component;
