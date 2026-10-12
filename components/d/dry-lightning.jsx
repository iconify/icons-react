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
		"content": `<style>.oovuyxbuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.47 3.16l-4.94 7.18q-.28.41.22.41H9q.5 0 .55.5l.4 4q.05.5.37.12l6.36-7.49q.32-.38-.18-.38h-3q-.5 0-.2-.4l2.9-3.95q.3-.4-.2-.4h-2.75q-.5 0-.78.41M2.75 17.25h18.5m-5.75 0l-1.25 1.5l1.5 1.5l-.75 1");
}
</style><path class="oovuyxbuv"/>`,
		"fallback": "iconoven:dry-lightning",
	});
}

export default Component;
