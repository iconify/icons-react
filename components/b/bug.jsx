import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/v/v7o-pz0an.css';
import '../../css/c/cmbdkd3sc.css';
import '../../css/m/mgt2dgbbs.css';
import '../../css/o/oltb880zh.css';
import '../../css/r/rvmpctctq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGK39sAcfc"><g class="ufeehvblu"><path class="v7o-pz0an"/><path class="cmbdkd3sc"/><path class="mgt2dgbbs"/><path class="oltb880zh"/><path class="rvmpctctq"/></g></mask></defs><path mask="url(#SVGK39sAcfc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bug",
	});
}

export default Component;
