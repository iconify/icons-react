import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/q-pm_ssno.css';
import '../../css/i/i4559bctz.css';
import '../../css/t/txzs0m_je.css';
import '../../css/a/aya7jobqq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXzdaRc6H"><g class="wwvp95byt"><path clip-rule="evenodd" class="q-pm_ssno"/><path class="i4559bctz"/><path class="txzs0m_je"/><path class="aya7jobqq"/></g></mask></defs><path mask="url(#SVGXzdaRc6H)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:building-four",
	});
}

export default Component;
