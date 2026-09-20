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
		"content": `<style>.inraz-ajd {
  fill: currentColor;
  d: path("M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q1.625 0 3.075.475T17.75 3.8L16.3 5.275q-.95-.6-2.025-.937T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20q.8 0 1.55-.15t1.45-.425l1.5 1.525q-1.025.5-2.15.775T12 22m7-2v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-8.4-3.4l-4.25-4.25l1.4-1.4l2.85 2.85l10-10.025l1.4 1.4z");
}
</style><path class="inraz-ajd"/>`,
		"fallback": "material-symbols:add-task-outline-sharp",
	});
}

export default Component;
