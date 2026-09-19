import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu5nodbov.css';
import '../../css/w/wu_mdhb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu5nodbov"/><path class="wu_mdhb5f"/>`,
		"fallback": "ci:black-lives-matter",
	});
}

export default Component;
