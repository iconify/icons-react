import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtrqctb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jtrqctb2w"/>`,
		"fallback": "sidekickicons:document-exclamation-solid",
	});
}

export default Component;
