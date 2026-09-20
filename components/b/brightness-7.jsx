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
		"content": `<style>.djj-e44re {
  fill: currentColor;
  d: path("M12 21.916L9.069 19H5v-4.069L2.085 12L5 9.069V5h4.069L12 2.085L14.931 5H19v4.069L21.916 12L19 14.931V19h-4.069zm2.99-6.926q1.24-1.242 1.24-2.99t-1.24-2.99Q13.747 7.77 12 7.77T9.01 9.01Q7.77 10.253 7.77 12t1.24 2.99q1.242 1.24 2.99 1.24t2.99-1.24m-5.279-.702Q8.77 13.346 8.77 12t.942-2.289T12 8.77t2.289.942T15.23 12t-.942 2.289T12 15.23t-2.289-.942");
}
</style><path class="djj-e44re"/>`,
		"fallback": "material-symbols-light:brightness-7",
	});
}

export default Component;
