import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ev8l1rbkz {
  width: 21.33px;
  height: 33.044px;
  x: 13.335px;
  y: 7.478px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.532px;
  ry: 3.532px;
}

.godsgtbxt {
  width: 13.278px;
  height: 3.581px;
  x: 17.361px;
  y: 28.596px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.369px;
  ry: 3.532px;
}

.hhc9ogb0b {
  width: 13.278px;
  height: 3.581px;
  x: 17.361px;
  y: 21.421px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.369px;
  ry: 3.532px;
}

.i8zfhbb_g {
  width: 13.278px;
  height: 3.581px;
  x: 17.361px;
  y: 14.638px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.369px;
  ry: 3.532px;
}
</style><rect class="ev8l1rbkz"/><rect class="i8zfhbb_g"/><rect class="hhc9ogb0b"/><rect class="godsgtbxt"/>`,
		"fallback": "arcticons:anylist",
	});
}

export default Component;
