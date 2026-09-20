import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr2er1f5h.css';
import '../../css/z/z6ezkobko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr2er1f5h"/><path class="z6ezkobko"/>`,
		"fallback": "tdesign:component-checkbox-filled",
	});
}

export default Component;
