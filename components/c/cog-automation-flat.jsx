import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bee51ybzl.css';
import '../../css/t/thf6xqbis.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bee51ybzl"/><path class="thf6xqbis"/></g>`,
		"fallback": "streamline-plump-color:cog-automation-flat",
	});
}

export default Component;
