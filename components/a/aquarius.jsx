import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dgh7jhswh {
  fill: var(--svg-color--9266cc, #9266cc);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.j74oof51t {
  fill: var(--svg-color--fff, #fff);
  d: path("M21.5 16.5A1.5 1.5 0 0 1 20 15v-3.694l-5.512 4.823A1.5 1.5 0 0 1 12 15v-3.548l-4.977 4.645a1.5 1.5 0 0 1-2.047-2.193l7.5-7A1.503 1.503 0 0 1 15 8v3.694l5.513-4.823A1.5 1.5 0 0 1 23 8v3.694l5.513-4.823A1.5 1.5 0 0 1 31 8v7a1.5 1.5 0 1 1-3 0v-3.694l-5.513 4.823a1.5 1.5 0 0 1-.987.371m0 13A1.5 1.5 0 0 1 20 28v-3.694l-5.512 4.823A1.5 1.5 0 0 1 12 28v-3.548l-4.977 4.645a1.5 1.5 0 0 1-2.047-2.193l7.5-7A1.503 1.503 0 0 1 15 21v3.694l5.513-4.823A1.5 1.5 0 0 1 23 21v3.694l5.513-4.823A1.5 1.5 0 0 1 31 21v7a1.5 1.5 0 1 1-3 0v-3.694l-5.513 4.823a1.5 1.5 0 0 1-.987.371");
}
</style><path class="dgh7jhswh"/><path class="j74oof51t"/>`,
		"fallback": "twemoji:aquarius",
	});
}

export default Component;
