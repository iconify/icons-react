import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/a/ax3qas8uv.css';
import '../../css/f/fmlca6ojk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGyEcOuHYh"><g class="wwvp95byt"><path class="ax3qas8uv"/><path clip-rule="evenodd" class="fmlca6ojk"/></g></mask></defs><path mask="url(#SVGyEcOuHYh)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:damage-map",
	});
}

export default Component;
