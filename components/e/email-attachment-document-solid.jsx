import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un3jorbwb.css';
import '../../css/c/c3h8n4bmg.css';
import '../../css/o/oc50jw6ki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un3jorbwb"/><path class="c3h8n4bmg"/><path clip-rule="evenodd" class="oc50jw6ki"/>`,
		"fallback": "streamline-plump:email-attachment-document-solid",
	});
}

export default Component;
