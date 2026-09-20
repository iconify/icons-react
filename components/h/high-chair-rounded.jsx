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
		"content": `<style>.let4uggac {
  fill: currentColor;
  d: path("M7.1 21q-.425 0-.737-.325t-.263-.75L7 10.05l-.8-4.725q-.125-.65.313-1.487T8.45 3q1.475 0 2.588.95t1.362 2.4L12.85 9H17q.425 0 .713.288T18 10t-.288.713T17 11h-.9l.8 8.925q.05.425-.25.75T15.9 21q-.4 0-.662-.262t-.313-.638l-.1-1.1h-6.65l-.1 1.1q-.05.375-.312.638T7.1 21m1.25-4h6.275l-.175-2h-5.9zm.375-4h5.55l-.2-2H8.9z");
}
</style><path class="let4uggac"/>`,
		"fallback": "material-symbols:high-chair-rounded",
	});
}

export default Component;
