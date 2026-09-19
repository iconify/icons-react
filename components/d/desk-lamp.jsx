import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/k_wpiu-6r.css';
import '../../css/m/m4655yvtx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1erRqbAS"><g class="rohhhzb0l"><path class="k_wpiu-6r"/><path class="m4655yvtx"/></g></mask></defs><path mask="url(#SVG1erRqbAS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:desk-lamp",
	});
}

export default Component;
