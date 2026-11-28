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
		"content": `<style>.jms0m2brc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.7657 21L3 21L3 5L21 5L21 10.7657M6 11L12 11M8 2L8 8M16 2L16 8M19.6667 17C19.6667 18.4728 18.4728 19.6667 17 19.6667C15.5272 19.6667 14.3333 18.4728 14.3333 17C14.3333 15.5272 15.5272 14.3333 17 14.3333C18.4728 14.3333 19.6667 15.5272 19.6667 17ZM19.99 17L22 17M19.1142 19.1142L20.5355 20.5355M17 19.99L17 22M14.8858 19.1142L13.4645 20.5355M14.01 17L12 17M14.8858 14.8858L13.4645 13.4645M17 14.01L17 12M19.1142 14.8858L20.5355 13.4645");
}
</style><path class="jms0m2brc"/>`,
		"fallback": "keyline-icons:calendar-cog-sharp",
	});
}

export default Component;
