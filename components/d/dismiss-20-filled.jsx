import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x5aycrnpo {
  fill: currentColor;
  d: path("m3.897 4.054l.073-.084a.75.75 0 0 1 .976-.073l.084.073L10 8.939l4.97-4.97a.75.75 0 0 1 .976-.072l.084.073a.75.75 0 0 1 .073.976l-.073.084L11.061 10l4.97 4.97a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073L10 11.061l-4.97 4.97a.75.75 0 0 1-.976.072l-.084-.073a.75.75 0 0 1-.073-.976l.073-.084L8.939 10l-4.97-4.97a.75.75 0 0 1-.072-.976l.073-.084z");
}
</style><path class="x5aycrnpo"/>`,
		"fallback": "fluent:dismiss-20-filled",
	});
}

export default Component;
