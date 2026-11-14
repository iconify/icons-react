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
		"content": `<style>.gnr26x9pu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.631 2.344l1.942 3.021q.162-.023.334-.023q.932 0 1.591.659l.001.001q.659.659.659 1.591t-.66 1.592L7.184 20.498q-.659.66-1.591.66t-1.591-.66q-.66-.659-.66-1.591t.66-1.591l7.908-7.909l-2.587-1.79q-.085-.059-.151-.139t-.108-.175t-.056-.197q-.015-.102-.001-.205q.575-4.319 4.894-4.894q.106-.015.211.001q.106.016.203.061t.178.115q.08.071.138.16m-1.643 5.985l2.257-2.256l-1.608-2.5q-2.537.538-3.068 3.082z");
}
</style><path class="gnr26x9pu"/>`,
		"fallback": "uix-solid:axe",
	});
}

export default Component;
