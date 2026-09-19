import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sgo8x6bpg.css';
import '../../css/x/xwwi3buwt.css';
import '../../css/r/r52hig7dg.css';
import '../../css/d/dgp5v0brw.css';
import '../../css/v/v0m5xdb6q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="ipSCocktail0"><g class="ft5dv1b6b"><g clip-path="url(#ipSCocktail1)" class="sgo8x6bpg"><path class="xwwi3buwt"/><path class="r52hig7dg"/><path class="dgp5v0brw"/></g><defs><clipPath id="ipSCocktail1"><path class="v0m5xdb6q"/></clipPath></defs></g></mask><path mask="url(#ipSCocktail0)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:cocktail",
	});
}

export default Component;
