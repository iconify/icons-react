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
		"content": `<style>.xfes2xbuu {
  fill: currentColor;
  d: path("M8.442 18.058q-1.041 0-1.77-.73q-.73-.729-.73-1.77q0-.48.187-.936q.186-.457.554-.824l7.115-7.115q.368-.368.828-.554t.932-.187q1.041 0 1.77.73q.73.728.73 1.77q0 .48-.187.936q-.186.456-.554.824l-7.115 7.115q-.367.368-.828.554t-.932.187");
}
</style><path class="xfes2xbuu"/>`,
		"fallback": "material-symbols-light:eraser-size-2-sharp",
	});
}

export default Component;
