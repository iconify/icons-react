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
		"content": `<style>.wuggwvbxm {
  fill: currentColor;
  d: path("M8.494 20.299q-1.642-.701-2.867-1.926t-1.926-2.867T3 12t.701-3.506t1.926-2.857T8.494 3.71T12 3t3.506.71t2.857 1.927t1.926 2.857T21 12t-.71 3.506t-1.926 2.867t-2.858 1.926T12 21t-3.506-.701M12 20q3.325 0 5.663-2.328T20 12q0-3.325-2.337-5.663T12 4Q8.656 4 6.328 6.338T4 12q0 3.344 2.328 5.672T12 20m-2.346-4.827l.688-.708L8.396 12.5h7.227l-1.946 1.966l.708.707L17.519 12l-3.134-3.154l-.708.708l1.946 1.946H8.396l1.946-1.946l-.688-.708L6.5 12z");
}
</style><path class="wuggwvbxm"/>`,
		"fallback": "material-symbols-light:arrows-left-right-circle-outline",
	});
}

export default Component;
