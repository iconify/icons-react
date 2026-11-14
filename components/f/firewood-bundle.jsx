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
		"content": `<style>.jxl4ve2uz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.288 4.288Q6.75 5.825 6.75 8q0 1.379.618 2.501q-1.439.032-2.595.749H19.23q-1.156-.719-2.597-.751q.617-1.122.617-2.499q0-2.175-1.538-3.712Q14.175 2.75 12 2.75T8.288 4.288M20.82 12.75H3.182q-.932 1.307-.932 3q0 2.175 1.538 3.712Q5.325 21 7.5 21t3.712-1.538q.464-.463.787-.984q.324.522.788.986q1.538 1.538 3.713 1.538t3.713-1.538q1.538-1.539 1.537-3.714q.001-1.693-.93-3");
}
</style><path class="jxl4ve2uz"/>`,
		"fallback": "uix-solid:firewood-bundle",
	});
}

export default Component;
