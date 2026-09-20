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
		"content": `<style>.j9olvcbsq {
  fill: var(--svg-color--404142, #404142);
  d: path("m19.425 19.151l-1.194 1.05h4.181l3.584 3.299H5.986l3.584-3.299h3.136l-1.045-1.05H8.824L2 25h28l-6.841-5.849z");
}

.lsljf5b6l {
  fill: var(--svg-color--36b6e5, #36b6e5);
  d: path("M28.115 9.432L25.701 7L15.562 17.216L11.7 13.324l-2.413 2.433l6.275 6.324z");
}
</style><path class="lsljf5b6l"/><path class="j9olvcbsq"/>`,
		"fallback": "vscode-icons:file-type-light-testcafe",
	});
}

export default Component;
