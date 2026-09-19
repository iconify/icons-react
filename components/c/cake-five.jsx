import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/di72bv0yj.css';
import '../../css/h/hpge1mbuo.css';
import '../../css/q/qfxalsbxq.css';
import '../../css/j/jaoqwr_ai.css';
import '../../css/l/lo2z8bp4b.css';
import '../../css/s/sfs98y94q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGiRtsHeCP"><g class="rohhhzb0l"><path class="di72bv0yj"/><path class="hpge1mbuo"/><path class="qfxalsbxq"/><path class="jaoqwr_ai"/><path class="lo2z8bp4b"/><path class="sfs98y94q"/></g></mask></defs><path mask="url(#SVGiRtsHeCP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cake-five",
	});
}

export default Component;
