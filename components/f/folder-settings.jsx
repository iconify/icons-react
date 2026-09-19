import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/z/zbocpbbaf.css';
import '../../css/l/lrxuxtb2u.css';
import '../../css/j/jk98jeb-y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGbgNCvbRH"><g class="rohhhzb0l"><path class="zbocpbbaf"/><circle class="lrxuxtb2u"/><path class="jk98jeb-y"/></g></mask></defs><path mask="url(#SVGbgNCvbRH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-settings",
	});
}

export default Component;
