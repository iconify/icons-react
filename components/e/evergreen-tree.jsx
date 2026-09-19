import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f3ba-lb-s {
  fill: currentColor;
  d: path("m61 53.684l-12.88-8.936c4.842-.894 8.047-1.832 8.047-1.832l-10.834-9.02c3.628-.865 6.001-1.735 6.001-1.735l-9.123-9.523c2.6-.894 4.289-1.771 4.289-1.771L31.999 2L17.5 20.867s1.689.877 4.288 1.771l-9.121 9.523s2.372.87 5.999 1.734L7.833 42.916s3.205.938 8.046 1.832L3 53.684s10.053 2.456 22.233 3.209V62h13.534v-5.107C50.946 56.14 61 53.684 61 53.684");
}
</style><path class="f3ba-lb-s"/>`,
		"fallback": "emojione-monotone:evergreen-tree",
	});
}

export default Component;
