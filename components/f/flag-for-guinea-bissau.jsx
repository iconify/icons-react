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
		"content": `<style>.t685ucb9o {
  fill: var(--svg-color--ce1126, #CE1126);
  d: path("M15 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h11V5zm-5 17l-2.547-1.851L4.906 22l.973-2.994l-2.547-1.851H6.48l.973-2.994l.973 2.994h3.148l-2.547 1.851L10 22z");
}

.uhebgnj9o {
  fill: var(--svg-color--fcd116, #FCD116);
  d: path("M32 5H15v13h21V9a4 4 0 0 0-4-4z");
}

.ypvgdc24h {
  fill: var(--svg-color--009e49, #009E49);
  d: path("M15 31h17a4 4 0 0 0 4-4v-9H15v13z");
}

.zgojaebmi {
  d: path("M8.426 17.155l-.973-2.994l-.973 2.994H3.332l2.547 1.851L4.906 22l2.547-1.851L10 22l-.973-2.994l2.547-1.851z");
  fill: var(--svg-color--000, #000);
}
</style><path class="uhebgnj9o"/><path class="ypvgdc24h"/><path class="t685ucb9o"/><path class="zgojaebmi"/>`,
		"fallback": "twemoji:flag-for-guinea-bissau",
	});
}

export default Component;
