import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4fzb36am.css';
import '../../css/a/a463ttbch.css';
import '../../css/h/hnevtaczd.css';
import '../../css/u/u3hslpbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4fzb36am"/><path class="a463ttbch"/><path class="hnevtaczd"/><path clip-rule="evenodd" class="u3hslpbgo"/>`,
		"fallback": "stash:emoji-wink-plus-light",
	});
}

export default Component;
