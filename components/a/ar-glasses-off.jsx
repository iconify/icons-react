import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sxzlyackc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.97 13.99q-.131.228-.29.437q-.16.209-.345.395q-.186.186-.394.347t-.436.292t-.47.233t-.497.169t-.514.103Q6.763 16 6.5 16q-.197 0-.392-.019q-.196-.02-.388-.058q-.193-.038-.381-.095t-.37-.132q-.181-.076-.355-.168q-.173-.093-.336-.202t-.316-.234q-.151-.125-.29-.264t-.264-.29t-.234-.316q-.109-.163-.202-.336q-.092-.174-.168-.355q-.075-.182-.132-.37t-.095-.381t-.058-.388T2.5 12q0-.269.036-.535t.107-.525t.176-.506t.243-.478t.304-.442t.361-.396q.193-.187.41-.345q.217-.159.453-.287m9.416 1.567q.129-.232.288-.446q.16-.213.346-.403t.395-.354t.439-.299q.229-.135.474-.238t.502-.173t.52-.105T17.5 8q.197 0 .392.019q.196.02.388.058q.193.038.381.095t.37.132q.181.076.355.168q.173.093.336.202t.316.234q.151.125.29.264t.264.29t.234.316q.109.163.202.336q.092.174.168.355q.075.182.132.37t.095.381t.058.388q.019.195.019.392q0 .265-.035.528q-.035.262-.104.518q-.07.256-.172.5q-.102.245-.236.474t-.297.437q-.163.21-.352.395t-.4.345q-.212.16-.443.289M2.5 10.5v-4m19 4v-4m-17-2L20 20");
}
</style><path class="sxzlyackc"/>`,
		"fallback": "uix:ar-glasses-off",
	});
}

export default Component;
