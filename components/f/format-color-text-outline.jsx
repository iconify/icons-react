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
		"content": `<style>.i5q6bebmk {
  fill: currentColor;
  d: path("M3 24v-3.462h18V24zm3.23-7l5.29-13h.96l5.29 13h-1.21l-1.442-3.638H8.816L7.36 17zm2.94-4.6h5.584L12.05 5.6h-.138z");
}
</style><path class="i5q6bebmk"/>`,
		"fallback": "material-symbols-light:format-color-text-outline",
	});
}

export default Component;
