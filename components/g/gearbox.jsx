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
		"content": `<style>.p8xa9balf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12H5.5m13 0h2.75m-9.96-3.31v-.53q.01-.5.51-.5h.4q.5 0 .51.5v.53q.01.5.39.66t.74-.19l.38-.38q.36-.35.71.01l.28.28q.36.35.01.71l-.38.38q-.35.36-.19.74t.66.39h.53q.5.01.5.51v.4q0 .5-.5.51h-.53q-.5.01-.66.39t.19.74l.38.38q.35.36-.01.71l-.28.28q-.35.36-.71.01l-.38-.38q-.36-.35-.74-.19t-.39.66v.53q-.01.5-.51.5h-.4q-.5 0-.51-.5v-.53q-.01-.5-.39-.66t-.74.19l-.38.38q-.36.35-.71-.01l-.28-.28q-.36-.35-.01-.71l.38-.38q.35-.36.19-.74t-.66-.39h-.53q-.5-.01-.5-.51v-.4q0-.5.5-.51h.53q.5-.01.66-.39t-.19-.74l-.38-.38q-.35-.36.01-.71l.28-.28q.35-.36.71-.01l.38.38q.36.35.74.19t.39-.66");
}

.sw2b59b4u {
  width: 13px;
  height: 13px;
  x: 5.5px;
  y: 5.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="sw2b59b4u"/><path class="p8xa9balf"/><path class="to8m3ibcr"/></g>`,
		"fallback": "iconoven:gearbox",
	});
}

export default Component;
