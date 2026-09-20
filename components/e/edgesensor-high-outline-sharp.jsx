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
		"content": `<style>.dnydtnbag {
  fill: currentColor;
  d: path("M6.808 20V4h10.384v16zm9.384-1V5H7.808v14zM12.588 8.086q.22-.222.22-.549t-.222-.547t-.549-.22t-.548.22t-.22.55t.222.547t.549.22t.548-.22M1.462 16.5v-6h1v6zm2.769-3v-6h1v6zm17.307 0v-6h1v6zm-2.769 3v-6h1v6zM7.808 5v14z");
}
</style><path class="dnydtnbag"/>`,
		"fallback": "material-symbols-light:edgesensor-high-outline-sharp",
	});
}

export default Component;
