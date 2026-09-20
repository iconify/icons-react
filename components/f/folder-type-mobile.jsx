import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d6w19obvd {
  fill: var(--svg-color--8146c0, #8146c0);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z");
}

.hcgfnpc0v {
  cx: 23.802px;
  cy: 28.652px;
  r: 0.652px;
  fill: var(--svg-color--aa83d5, #aa83d5);
}

.ne49f5ifo {
  width: 2.864px;
  height: 0.449px;
  x: 22.353px;
  y: 12.27px;
  fill: var(--svg-color--aa83d5, #aa83d5);
  ry: 0.224px;
}

.s_a35rtzc {
  width: 9.605px;
  height: 14px;
  x: 19px;
  y: 13.427px;
  fill: var(--svg-color--aa83d5, #aa83d5);
  ry: 0px;
}

.z63nuqb8y {
  width: 11.596px;
  height: 17.894px;
  x: 18px;
  y: 11.701px;
  fill: var(--svg-color--381d55, #381d55);
  stroke: var(--svg-color--381d55, #381d55);
  stroke-width: var(--svg-stroke-width--0-758px, 0.758px);
  ry: 2.237px;
}
</style><path class="d6w19obvd"/><rect class="z63nuqb8y"/><rect class="s_a35rtzc"/><circle class="hcgfnpc0v"/><rect class="ne49f5ifo"/>`,
		"fallback": "vscode-icons:folder-type-mobile",
	});
}

export default Component;
