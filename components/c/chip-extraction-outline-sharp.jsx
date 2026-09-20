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
		"content": `<style>.pd908wb6w {
  fill: currentColor;
  d: path("M12 21q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 12t.713-3.512t1.924-2.85t2.85-1.925T12 3v2Q9.075 5 7.038 7.038T5 12t2.038 4.963T12 19zm4-4l-1.4-1.425L17.175 13H9v-2h8.175L14.6 8.4L16 7l5 5z");
}
</style><path class="pd908wb6w"/>`,
		"fallback": "material-symbols:chip-extraction-outline-sharp",
	});
}

export default Component;
