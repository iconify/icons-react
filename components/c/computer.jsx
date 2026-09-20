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
		"content": `<style>.ncr1s1pyc {
  fill: currentColor;
  d: path("M4.616 17.462q-.691 0-1.153-.463T3 15.846V6.077q0-.69.463-1.153t1.152-.462h14.77q.69 0 1.152.462T21 6.077v9.77q0 .69-.463 1.152t-1.153.463zm-2.847 2v-1h20.462v1z");
}
</style><path class="ncr1s1pyc"/>`,
		"fallback": "material-symbols-light:computer",
	});
}

export default Component;
