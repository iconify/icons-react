import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/e/ec9lvsxkj.css';
import '../../css/z/zwf0cly4t.css';
import '../../css/j/jgdiew26a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGYVBlhcDy"><g class="rohhhzb0l"><path class="ua-z8vb0h"/><path class="ec9lvsxkj"/><path clip-rule="evenodd" class="zwf0cly4t"/><path class="jgdiew26a"/></g></mask></defs><path mask="url(#SVGYVBlhcDy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:adobe-photoshop",
	});
}

export default Component;
