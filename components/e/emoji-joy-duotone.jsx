import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-8b3ot2c.css';
import '../../css/u/u7z4v_blb.css';
import '../../css/j/jhodmt__j.css';
import '../../css/b/btlc75bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w-8b3ot2c"/><path class="u7z4v_blb"/><path clip-rule="evenodd" class="jhodmt__j"/><path clip-rule="evenodd" class="btlc75bib"/>`,
		"fallback": "stash:emoji-joy-duotone",
	});
}

export default Component;
